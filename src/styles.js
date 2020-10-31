import { StyleSheet } from 'react-native';





export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },

    img: {
        width: 200,
        height: 200,
        marginTop: -80,
        marginBottom: 3
    },

    phrase: {
        fontStyle: 'italic',
        color: '#dd7b22',
        textAlign: 'center',
    },

    btnOpen: {
        margin: 10,
        width:220,
        height: 60,
        backgroundColor: '#377369',
        borderRadius: 24,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnText: {
        color: '#fff',
    },

    phraseView:{
        width: 300,
        height: 100,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    phraseText: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 15,
    }

});