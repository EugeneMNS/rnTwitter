import {EvilIcons} from "@expo/vector-icons";
import {Text, View} from "react-native";

type IconButtonPropsType = {
    icon: React.ComponentProps<typeof EvilIcons>['name'],
    text?: string | number,
}

export const IconButton = ({icon, text}: IconButtonPropsType) => {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <EvilIcons name={icon} size={22} color='gray'/>
            <Text style={{fontSize: 12, color: 'gray'}}>{text}</Text>
        </View>
    )
}