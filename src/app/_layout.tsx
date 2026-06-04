import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"

import { OnboardingProvider } from "#features/onboarding"
import { SettingsProvider } from "#shared/settings"

const Layout: React.FC = () => {
  return (
    <SettingsProvider>
      <OnboardingProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </OnboardingProvider>

      <StatusBar style="auto" />
    </SettingsProvider>
  )
}

export default Layout
