import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Button } from "react-native";

class PlaceInput extends Component {
    state = {
        placeName: ""
    };

    placeNameChangedHandler = val => {
        this.setState({
            placeName: val
        });
    };

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === "") {
          return;
        }
    
        this.props.onPlaceAdded(this.state.placeName);
      }

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="An awesome place"
                    value={this.state.placeName}
                    onChangeText={this.placeNameChangedHandler}
                    style={styles.placeInput}
                />
                <Button title="Add" 
                        style={styles.placeButton} 
                        onPress={this.placeSubmitHandler} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    placeInput: {
        width: "70%"
    },
    placeButton: {
        width: "30%"
    },
});

export default PlaceInput;