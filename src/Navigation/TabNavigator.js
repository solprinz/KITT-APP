import AdoptarStack from "./AdoptarStack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";
import InfoStack from "./InfoStack";
import PublicarStack from "./PublicarStack";
import HomeStack from "./HomeStack";
import PerfilStack from "./PerfilStack";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.container}>
              <Entypo
                name="home"
                size={30}
                color={focused ? colors.primary : "grey"}
              />
              <Text
                style={{
                  ...styles.text,
                  ...{ color: focused ? colors.primary : "grey" },
                }}
              >
                Inicio
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="AdoptarStack"
        component={AdoptarStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.container}>
              <MaterialIcons
                name="pets"
                size={30}
                color={focused ? colors.primary : "grey"}
              />
              <Text
                style={{
                  ...styles.text,
                  ...{ color: focused ? colors.primary : "grey" },
                }}
              >
                Adoptar
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="PublicarStack"
        component={PublicarStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.container}>
              <MaterialIcons
                name="my-library-books"
                size={30}
                color={focused ? colors.primary : "grey"}
              />
              <Text
                style={{
                  ...styles.text,
                  ...{ color: focused ? colors.primary : "grey" },
                }}
              >
                Publicar
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="InfoStack"
        component={InfoStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.container}>
              <MaterialIcons
                name="info"
                size={30}
                color={focused ? colors.primary : "grey"}
              />
              <Text
                style={{
                  ...styles.text,
                  ...{ color: focused ? colors.primary : "grey" },
                }}
              >
                Info Útil
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="PerfilStack"
        component={PerfilStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.container}>
              <FontAwesome
                name="user"
                size={30}
                color={focused ? colors.primary : "grey"}
              />
              <Text
                style={{
                  ...styles.text,
                  ...{ color: focused ? colors.primary : "grey" },
                }}
              >
                Perfil
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.grey,
    position: "absolute",
    height: 90,
  },
  container: {
    alignItems: "center",
  },
  text: {
    textAlign: "center",
  },
});
