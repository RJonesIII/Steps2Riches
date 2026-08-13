import { Stack, Tabs } from "expo-router";


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown : true, // Puts the header at the top of the screen, with tab name
      }}>
      
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
