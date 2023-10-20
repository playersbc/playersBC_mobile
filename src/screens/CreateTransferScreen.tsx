import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import { BackIcon, Button, Title } from '../components';
import { Theme } from '../theme';
import { useEffect, useState } from 'react';
import { Form } from '../components/Passports/Form';
import { HeaderStakeholder } from '../components/HeaderStakeholder';
import { IPlayerStakeholder } from '../interfaces';
import { StakeHolderService } from '../services';
import { useStepStore } from '../stores';
import { TransferService } from '../services/TransferService';
import { StatusIcon } from '../components/Icons/StatusIcon';
import { Item } from '../components/AddStakeholderSteps/Step4';
import { useForm } from 'react-hook-form';

export function CreateTransferScreen({ navigation: { navigate }, route }) {
  const [_id] = useState(route.params._id);
  const [player, setPlayer] = useState<IPlayerStakeholder>();
  const [loading, setLoading] = useState(false);
  const { dataTransfer, setStep, step } = useStepStore();

  const { handleSubmit } = useForm();

  async function onSubmit() {
    try {
      setLoading(true);
      dataTransfer.player_address = player.address;
      console.log(dataTransfer);
      await TransferService.createTransfer(dataTransfer);
      setLoading(false);
      await navigate('Success', {
        text: 'Transferência solicitada com sucesso!',
      });
    } catch (error) {
      setLoading(false);
      setStep(1);
      console.log(error);
    }
  }

  useEffect(() => {
    setStep(1);
    StakeHolderService.getPlayerByOnChainId(_id.toString())
      .then(({ data }) => setPlayer(data))
      .catch((err) => console.log(err));
  }, [_id]);

  const data = [
    { title: 'Tipo', info: dataTransfer?.type },
    { title: 'Nome', info: player?.name },
    { title: 'Pais', info: player?.country },
    { title: 'Data da transferência', info: dataTransfer?.date },
    { title: 'Valor', info: dataTransfer?.value },
    { title: 'Inicio do contrato', info: dataTransfer?.init_contract },
    { title: 'Fim do contrato', info: dataTransfer?.end_contract },
    { title: 'Remuneração do Atleta', info: dataTransfer?.salary },
  ];

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        {step === 1 ? (
          <>
            <View style={styles.subheader}>
              <TouchableOpacity onPress={() => navigate('Transfers')}>
                <BackIcon fill="#525252" size={30} />
              </TouchableOpacity>
              <Text style={styles.subheaderText}>
                Solicitação de Transferências
              </Text>
              <View />
            </View>
            <HeaderStakeholder />
            <View style={styles.content}>
              <Image
                style={styles.playerImage}
                source={require('../../assets/jogador.png')}
              />
              <View style={{ flexDirection: 'column', gap: 4, marginTop: -20 }}>
                <Title fontSize={18} children={player?.name} />
                <Text children={`ID: ${player?.onChainId}`} />
                <Text children={player?.nationality} />
              </View>
            </View>
            <Form player={player} />
          </>
        ) : (
          <View style={styles.content2}>
            <FlatList
              style={styles.card}
              columnWrapperStyle={{ gap: 50 }}
              contentContainerStyle={{ gap: 10 }}
              data={data}
              renderItem={Item}
              numColumns={3}
            />
            <Button
              loading={loading}
              disabled={loading}
              label="Confirmar"
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        )}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  subheader: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    backgroundColor: Theme.colors.primary,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  subheaderText: {
    fontSize: 16,
    fontFamily: Theme.fontsFamily.display.medium,
    color: '#fff',
  },
  safeArea: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  logoContainer: {
    width: '100%',
    paddingVertical: 20,
  },
  content: {
    marginTop: -20,
    zIndex: -1,
    gap: 10,
    position: 'relative',
    paddingHorizontal: 20,
    paddingTop: 60,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  playerImage: {
    width: 90,
    height: 90,
    borderRadius: 99,
  },
  content2: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    flexDirection: 'column',
    gap: 20,
  },
  card: {
    flex: 1,
    backgroundColor: '#EEF2F3',
    borderRadius: 10,
    padding: 20,
  },
  content3: {
    flex: 1,
    height: '100%',
    padding: 20,
    justifyContent: 'space-between',
    flexDirection: 'column',
    gap: 20,
  },
  card2: {
    height: 170,
    backgroundColor: '#EEF2F3',
    borderRadius: 10,
    padding: 20,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Theme.colors.primary,
  },
});
