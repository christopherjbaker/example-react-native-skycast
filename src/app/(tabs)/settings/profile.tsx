import * as Notifications from "expo-notifications"
import { useEffect } from "react"
import { Platform, StyleSheet, View } from "react-native"

import Typography from "#design/elements/Typegraphy"

const App: React.FC = () => {
  useEffect(() => {
    async function configureNotifications() {
      const { status } = await Notifications.requestPermissionsAsync()
      if (status !== Notifications.PermissionStatus.GRANTED) {
        console.log("Permission to show notifications was denied")
        return false
      }

      Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldPlaySound: false,
          shouldSetBadge: false,
          shouldShowBanner: true,
          shouldShowList: true,
        }),
      })

      return true
    }

    setTimeout(async () => {
      await configureNotifications()

      const id = await Notifications.scheduleNotificationAsync({
        content: {
          title: "Full Title",
          subtitle: Platform.select({ android: "Short Title", ios: "" }),
          body: "Body",
        },
        trigger: null,
      })

      await new Promise((resolve) => setTimeout(resolve, 1000))

      await Notifications.dismissNotificationAsync(id)
    }, 2500)
  }, [])

  return (
    <>
      <View style={styles.container}>
        <Typography variant="title">Profile</Typography>
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
