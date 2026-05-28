import { Button, StyleSheet, View } from "react-native"

import Typography from "#design/elements/Typegraphy"
import { createNotification } from "#shared/notifications"
import FormGroup from "#design/elements/FormGroup"
import ToggleField from "#design/elements/fields/Toggle"
import { useState } from "react"

const App: React.FC = () => {
  const [enabled, setEnabled] = useState(false)
  const [favorites, setFavorites] = useState(false)

  return (
    <>
      <View style={styles.container}>
        <Typography variant="title">Notifications</Typography>

        <FormGroup label="Enable Notifications">
          <ToggleField onChange={setEnabled} value={enabled} />
        </FormGroup>

        {enabled && (
          <>
            <FormGroup label="Favorites Warnings">
              <ToggleField onChange={setFavorites} value={favorites} />
            </FormGroup>

            <Button
              title="Test Notification"
              onPress={() =>
                createNotification({
                  title: "Full Title",
                  short: "Short",
                  body: "Exercitation nulla pariatur minim proident ullamco et pariatur.",
                })
              }
            />
          </>
        )}
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
