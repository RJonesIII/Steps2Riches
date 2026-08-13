import { Stack, Tabs } from "expo-router";


export default function RootLayout() {
  return (
    <Tabs>

      <Tabs.Screen 
        name="index" // Name is the local path
        options={{
          title:'Home', // Title is how it is displayed
        }}
      />

      <Tabs.Screen 
        name="shops"
        options={{
          title:'Shops',
        }}
      />

      <Tabs.Screen 
        name="settings"
        options={{
          title:'Profile',
        }}
        
      />

    </Tabs>
  )
}
