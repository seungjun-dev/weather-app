import React from "react";
import {StyleSheet, View, Text, StatusBar} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {Ionicons} from "@expo/vector-icons";

const weatherCases = {
    Clear: {
        iconName: "ios-sunny",
        color: ["#2980B9", "#6DD5FA"],
        title: "Sunny",
        subtitle: "Why don't you hangout?"
    },
    Clouds: {
        iconName: "ios-cloud",
        color: ["#73C8A9","#373B44"],
        title: "Clouds",
        subtitle: "Might be rain soon!"
    },
    Thunderstorm: {
        iconName: "ios-thunderstorm",
        color: ["#0F2027","#203A43","#2C5364"],
        title: "Thunderstorm",
        subtitle: "Stay at home, play game"
    },
    Rain: {
        iconName: "ios-rainy",
        color: ["#2C3E50","#4CA1AF"],
        title: "Rain",
        subtitle: "Rain drops"
    },
    Snow: {
        iconName: "ios-snow",
        color: ["#00d2ff","#928DAB"],
        title: "Snow",
        subtitle: "Do you wanna build a snowman?"
    }
}

export default function Weather({temp, condition, place}) {
    const tempC = (temp-273.15).toFixed(1);

    return (
        <LinearGradient
            colors={weatherCases[condition].color}
            style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <Text style={styles.place}>{place}</Text>
                <Ionicons name={weatherCases[condition].iconName} size={96} color="white"/>
                <Text style={styles.font}>{tempC}℃</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherCases[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    ); 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    font: {
        fontSize: 42,
        color: "white"
    },  
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 52,
        color: "white"
    },
    subtitle: {
        fontSize: 32,
        color: "white"
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    },
    place: {
        fontSize:24,
        color: "white"
    }
})
