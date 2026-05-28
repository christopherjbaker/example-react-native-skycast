import { StyleSheet, View } from "react-native"

import TextField from "#design/elements/fields/Text"
import Typography from "#design/elements/Typegraphy"
import FormGroup from "#design/elements/FormGroup"
import { useState } from "react"

const App: React.FC = () => {
  const [name, setName] = useState("Home")

  return (
    <>
      <View style={styles.container}>
        <Typography variant="title">Settings</Typography>

        <FormGroup label="Home Name">
          <TextField onChange={setName} value={name} />
        </FormGroup>
      </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
