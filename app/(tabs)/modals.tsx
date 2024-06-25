import React, {useState} from 'react';
import {View, Text, Button, Modal} from "react-native";

const Modals = () => {
    const [open, setOpen] = useState(false)
    return (
        <View style={{
            paddingTop: 50,
            flex: 1,

        }}>
            <Text>Modals</Text>

            <Button
                title={'Open modal'}
                onPress={() => {
                    setOpen(true)
                }}
            />

            <Modal
                visible={open}
                animationType={'slide'}
                presentationStyle={'pageSheet'}
                onRequestClose={() => {
                    setOpen(false)
                }}
            >
                <View style={{
                    borderStyle: 'solid',
                    borderWidth: 1,
                    borderColor: 'black',
                    margin: 50,
                    flex: 1
                }}>
                    <Text>
                        Some text
                    </Text>
                    <Button
                        onPress={() => {
                            setOpen(false)
                        }}
                        title={'Close modal'}
                    />
                </View>
            </Modal>
        </View>
    );
};

export default Modals;