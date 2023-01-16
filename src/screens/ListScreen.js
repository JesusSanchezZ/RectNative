import { FlatList, StyleSheet, Text, View } from "react-native";

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age: 20 },
        { name: 'Friend #2', age: 45 },
        { name: 'Friend #3', age: 32 },
        { name: 'Friend #4', age: 27 },
        { name: 'Friend #5', age: 53 },
        { name: 'Friend #6', age: 30 },
        { name: 'Friend #7', age: 39 },
        { name: 'Friend #8', age: 29 },
        { name: 'Friend #9', age: 60 },
    ];

    return (
        <FlatList 
            // horizontal
            // showsHorizontalScrollIndicator={false}
            keyExtractor={(friend) => friend.name}
            data={friends} 
            renderItem={({ item }) => {
                return <Text style={sytles.textStyle}>
                    { item.name } - Age { item.age }
                </Text>
            }}
        />
    );
};

const sytles = StyleSheet.create({
    textStyle: {
        marginVertical: 20,
    }
});

export default ListScreen;