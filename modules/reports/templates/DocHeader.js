import { Image, Line, Svg, Text, View } from "@react-pdf/renderer";
import { stylesBase } from "../styles/BaseStyles";

export default function DocHeader({ title }) {
    return (
        <>
            <View style={stylesBase.sectionAlignRight} >
                <View style={stylesBase.gridLogo} >
                    <Image src="public/img/Smart_Data_Visio-sin_fondo.png" />
                </View>
            </View>
            <View style={stylesBase.sectionAlignCenter} >
                <Text>{title}</Text>
            </View>
            <Svg height="1" width="800" >
                <Line
                    x1="10"
                    x2="580"
                    y1="0"
                    y2="0"
                    strokeWidth={1}
                    stroke="rgb(0,0,0)" />
            </Svg>
        </>
    );
}