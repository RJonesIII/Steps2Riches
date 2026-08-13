import {View, Text} from "react-native"
import {Link} from "expo-router"

const Settings = () => {
    return (
        <View>
            <Text>Here you can:</Text>
            <Text>1) Customize your character</Text>
            <Text>2) See your player stats (lifetime steps, minigames completed, lifetime income)</Text>
            <Text>3) Change account information (name, profile picture)</Text>
            <Text>4) Reset your account and start from scratch</Text>
        </View>
    )
}

export default Settings