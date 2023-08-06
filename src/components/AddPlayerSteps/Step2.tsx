import { Controller, useForm } from "react-hook-form";
import { View, Text, StyleSheet } from "react-native";
import { CheckBox } from "../Form/CheckBox";
import { StatusIcon } from "../Icons/StatusIcon";
import { IStakeholderStep2 } from "../../interfaces";
import { useState } from "react";
import { useStepStore } from "../../stores";
import { Button, TextInput } from "../Form";
import { Stakeholder2Resolver } from "../../validations";
import { Theme } from "../../theme";

export function Step2() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IStakeholderStep2>({ resolver: Stakeholder2Resolver });
  const { dataStakeholder, setDataStakeholder, setStep } = useStepStore()
  const [status, setStatus] = useState('green')
  const [active, setActive] = useState(false)

  async function onSubmit(values: IStakeholderStep2) {
    dataStakeholder.address = values.address
    dataStakeholder.email = values.email
    dataStakeholder.status = values.status
    dataStakeholder.active = values.active
    setDataStakeholder(dataStakeholder)
    setStep(3)
  }

  return (
    <View style={styles.content}>
      <View style={{ gap: 4 }}>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, ref, ...field } }) => (
            <>
              <Text style={styles.text} children={'Email'} />
              <TextInput
                placeholder="Digite seu email"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={onChange}
                errors={errors}
                {...field}
              />
            </>

          )}
        />
        <View>
          <Text style={styles.anotherText} children={'Ativo'} />
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', paddingHorizontal: 50, gap: 20 }}>
            <CheckBox
              onPress={() => setActive(true)}
              isSelected={active}
            >
              <Text style={styles.anotherText}>Sim</Text>
            </CheckBox>
            <CheckBox
              onPress={() => setActive(false)}
              isSelected={!active}
            >
              <Text style={styles.anotherText}>Não</Text>
            </CheckBox>
          </View>
        </View>
        <View>
          <Text style={styles.anotherText} children={'Status'} />
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 50 }}>
            <CheckBox
              onPress={() => setStatus('green')}
              isSelected={status === "green" && true}
              children={<StatusIcon status={"green"} />}
            />
            <CheckBox
              onPress={() => setStatus('yellow')}
              isSelected={status === "yellow" && true}
              children={<StatusIcon status={"yellow"} />}
            />
            <CheckBox
              onPress={() => setStatus('red')}
              isSelected={status === "red" && true}
              children={<StatusIcon status={"red"} />}
            />
          </View>
        </View>
        <Controller
          control={control}
          name="address"
          render={({ field: { onChange, ref, ...field } }) => (
            <>
              <Text style={styles.text} children={'Address do stakeholder'} />
              <TextInput
                placeholder="Digite a carteira do stakeholder"
                onChangeText={onChange}
                errors={errors}
                {...field}
              />
            </>

          )}
        />
      </View>
      <Button style={{ marginTop: 30 }} label="Continuar" onPress={handleSubmit(onSubmit)} />
    </View>)
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  text: {
    fontSize: 14,
    fontFamily: Theme.fontsFamily.display.medium,
    color: "#525252",
    marginBottom: 4
  },
  anotherText: {
    fontSize: 14,
    fontFamily: Theme.fontsFamily.display.medium,
    color: "#525252",
  },
});