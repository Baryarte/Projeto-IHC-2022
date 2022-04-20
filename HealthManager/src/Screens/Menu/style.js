import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    compButtons:{
        alignContent: 'flex-start',
        justifyContent: 'space-evenly',
        flex: 1,
        flexDirection: "row",
        flexWrap: 'wrap',
        width:'100%',
    
    },
    title: {
        fontFamily: "Roboto_400Regular",
        marginTop:15,
        fontSize:27,
        marginLeft:20,
        marginBottom:30,
    },
    align: {
        display:"flex",
        flexDirection: "row",
        justifyContent:"space-between",
        marginRight:20,
        marginTop:20,
    },
    space: {
        marginBottom:40,
    },
    alignBar: {
        alignItems:"center",
        flexDirection: "row",
    },
    bar: {
        backgroundColor:"#7EA1C4",
        height:59,
        width:8,
        borderRadius:10,
        marginLeft:15,
    },
    period: {
        fontSize:18,
        marginLeft:12,
        width:120,
    },
    boxHeart: {
        height:80,
        width:170,
        alignItems:"center",
        flexDirection: "row",
        borderRadius:20,
        borderWidth:3,
        borderColor:"#7EA1C4",
        backgroundColor:"#F1F5F9",
        margin:12,
    },
    heartbeat: {
        flex: 1,
    width: 120,
    height: 120,
    resizeMode: 'contain'
    },
    greenText: {
        color:"#3D9857",
        fontSize:24,
        marginLeft:20,
    },
    name: {
        fontSize:18,
        color:"#212F47",
        marginLeft:12,
    },
    information: {
        fontSize:14,
        color:"gray",
        marginLeft:12,
    },
    barHuge: {
        backgroundColor:"#7EA1C4",
        height:100,
        width:8,
        borderRadius:10,
        marginLeft:15,
    },
});

export default styles