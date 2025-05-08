import {StyleSheet, Dimensions} from 'react-native';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
 wrapper: {},
  slide: {
    flex: 1,
   // justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  image: {
    width,
    flex: 1
  },
  paginationStyle: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  paginationText: {
    color: 'black',
    fontSize: 20
  },
   modalText: {
    textAlign: "justify",
    fontSize : 18,
     
  },
  modalTextcuerpo: {
    textAlign: "left",
     marginLeft : 10,
  },
   modalTextnegrillaTitulo: {
   fontSize : 23,
    textAlign: "center",
    fontWeight: "bold",
     borderWidth: 2,
     backgroundColor: '#23B9B5',
     marginTop:10,
     marginHorizontal:10,
     borderRadius:10
  },
   modalTextnegrilla: {
   fontSize : 18,
    textAlign: "left",
    fontWeight: "bold",
     marginLeft : 3,
  },
  margen:{
    margin:1
  },
  bordeview:{
    borderWidth: 2,
     marginHorizontal:10,
     marginVertical:3,
    paddingVertical: 8,
    backgroundColor: 'white',
    borderRadius: 10
  },
  fondoviewText:{
    backgroundColor: "rgba(0, 185, 188, 0.37)"
  }
});

