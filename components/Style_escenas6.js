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
     borderWidth: 4,
     backgroundColor: 'white'
  },
   modalTextnegrilla: {
   fontSize : 18,
    textAlign: "left",
    fontWeight: "bold",
     marginLeft : 3,
  },
  margen:{
    margin:5
  },
  bordeview:{
    borderWidth: 2,
     margin:1,
    paddingVertical: 8,
    backgroundColor: 'white'
  },
  fondoviewText:{
    backgroundColor: "rgba(0, 185, 188, 0.37)"
  }
});

