import React, {PureComponent} from "react";
import {Text, TextStyle} from "react-native";

interface Props {
    word: string
}

interface State {

}

export default class Hello extends PureComponent<Props, State> {
    render() {
        return (
            <Text style={styles.welcome}>Hello {this.props.word}</Text>
        );
    }
}

const styles = {
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    } as TextStyle,
};
