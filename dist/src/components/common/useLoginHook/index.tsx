import React from 'react'

import { Text, View } from "react-native"





interface Props {



}



export const index = (props: Props) => {





    const Component = ({ children }: any) => {

        return (

            <View>

                <Text>text</Text>

                {children}

            </View>

        )

    }







    return [Component]

}

