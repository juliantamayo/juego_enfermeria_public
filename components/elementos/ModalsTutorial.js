import React from "react";
import { View, Text, StyleSheet, Alert, Modal, TouchableHighlight, ImageBackground, Dimensions } from "react-native";
import Carousel from 'react-native-reanimated-carousel';


const styles = StyleSheet.create({
  modalView: {
    width: '100%',
    height: '97%',
    backgroundColor: "rgba(0, 185, 188, 0.37)",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
   backgroundColor: "red",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2
  },
  modalTex3: {
    textAlign: "center",
    color: "#fff"   
  },
  headerModal:{
    flex: 0.1,
    flexDirection : 'row',
    alignItems: 'center',
    
  },
  headerMizq:{
    flex:0.9,
    backgroundColor: "#fbe122"
  },
  headerMDer:{
    flex:0.1,
    backgroundColor: "rgba(0, 0, 0, 0.48)",
  },
  bodyModal:{
    flex:0.9,
    alignItems: "center",
    paddingVertical: 8,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 4,
    justifyContent: "center",
    width: '90%',
    height: '90%',
  },
  margen:{
    margin:5
  },
  wrapper: {
     //backgroundColor: 'white'
  },

  slide: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
   image: {
   width: '90%',
    height: '90%',
  }
});

const { width } = Dimensions.get('window');

const images = [
  require('../../assets/ayudas/mp1.jpg'),
  require('../../assets/ayudas/mp2.jpg'),
  require('../../assets/ayudas/mp3.jpg'),
  require('../../assets/ayudas/mp4.jpg'),
  require('../../assets/ayudas/mp4-1.jpg'),
  require('../../assets/ayudas/mp5.jpg'),
  require('../../assets/ayudas/mp6.jpg'),
  require('../../assets/ayudas/mp7.jpg'),
  require('../../assets/ayudas/mp8.jpg'),
  require('../../assets/ayudas/mp9.jpg'),
  require('../../assets/ayudas/mp10.jpg'),
];

const imagesJuego1 = [
  require('../../assets/ayudas/mj1_1.jpg'),
  require('../../assets/ayudas/mj1_2.jpg'),
  require('../../assets/ayudas/mj1_3.jpg'),
  require('../../assets/ayudas/mj1_4.jpg'),
];

const imagesJuego2 = [
  require('../../assets/ayudas/mj2_1.jpg'),
  require('../../assets/ayudas/mj2_2.jpg'),
  require('../../assets/ayudas/mj2_3.jpg'),
  require('../../assets/ayudas/mj2_4.jpg'),
];

const imagesJuego3 = [
  require('../../assets/ayudas/mj3_1.jpg'),
  require('../../assets/ayudas/mj3_2.jpg'),
];

const imagesCasos = [
  require('../../assets/ayudas/mc1.jpg'),
  require('../../assets/ayudas/mc2.jpg'),
  require('../../assets/ayudas/mc3.jpg'),
];

const imagesJuegos = [
  require('../../assets/ayudas/mj1.jpg'),
  require('../../assets/ayudas/mj2.jpg'),
  require('../../assets/ayudas/mj3.jpg'),
  require('../../assets/ayudas/mj4.jpg'),
];

const imagesCaso1 = [
  require('../../assets/ayudas/Intro1.jpg'),
  require('../../assets/ayudas/Intro2.jpg'),
  require('../../assets/ayudas/Intro7.jpg'),
  require('../../assets/ayudas/mc3.jpg'),
];

const imagesEscena1 = [
  require('../../assets/ayudas/Intro3.jpg'),
  require('../../assets/ayudas/Intro4.jpg'),
  require('../../assets/ayudas/Intro5.jpg'),
  require('../../assets/ayudas/Intro6.jpg'),
  require('../../assets/ayudas/Intro7.jpg'),
  require('../../assets/ayudas/Intro8.jpg'),
];

const imagesEscena2 = [
  require('../../assets/ayudas/pp2.jpg'),
  require('../../assets/ayudas/pp3.jpg'),
  require('../../assets/ayudas/pp4.jpg'),
  require('../../assets/ayudas/pp5.jpg'),
  require('../../assets/ayudas/pp6.jpg'),
  require('../../assets/ayudas/pp7.jpg'),
  require('../../assets/ayudas/pp8.jpg'),
];

const imagesEscena3 = [
  require('../../assets/ayudas/pv1.jpg'),
  require('../../assets/ayudas/pv2.jpg'),
];

const imagesPreguntas = [
  require('../../assets/ayudas/pp2.jpg'),
  require('../../assets/ayudas/pp3.jpg'),
  require('../../assets/ayudas/pp4.jpg'),
  require('../../assets/ayudas/pp5.jpg'),
  require('../../assets/ayudas/pp6.jpg'),
];

const imagesPruebas = [
  require('../../assets/ayudas/pv1.jpg'),
  require('../../assets/ayudas/pv2.jpg'),
  require('../../assets/ayudas/pp4.jpg'),
  require('../../assets/ayudas/pp5.jpg'),
  require('../../assets/ayudas/pp6.jpg'),
];

const imagesValoracion = [
  require('../../assets/ayudas/v1.jpg'),
  require('../../assets/ayudas/v2.jpg'),
];

const imagesTeoria = [
  require('../../assets/ayudas/t1.jpg'),
  require('../../assets/ayudas/t2.jpg'),
  require('../../assets/ayudas/t3.jpg'),
  require('../../assets/ayudas/t4.jpg'),
  require('../../assets/ayudas/t5.jpg'),
  require('../../assets/ayudas/t6.jpg'),
];


export const Modal_Menu = ({ text, onPress = () => {} }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={text}
    onRequestClose={() => {
      Alert.alert("Presione la X para cerrar la ventana.");
    }}
  >
    <View style={styles.modalView}>
      <View style={styles.headerModal}>
        <View style={styles.headerMizq} />
        <View style={styles.margen} />
        <View style={styles.headerMDer}>
          <TouchableHighlight style={styles.openButton} onPress={onPress}>
            <Text style={styles.modalTex3}>x</Text>
          </TouchableHighlight>
        </View>
      </View>

      <View style={styles.bodyModal}>
        <Carousel
          loop={false}
          width={width * 0.8}
          height={'100%'}
          autoPlay={false}
          data={images}
          pagingEnabled={true}
          renderItem={({ item }) => (
            <ImageBackground source={item} style={styles.slide} resizeMode="cover" />
          )}
        />
      </View>
    </View>
  </Modal>
);

export const Modal_MenuJuego1 = ({ text, onPress = () => {} }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={text}
    onRequestClose={() => {
      Alert.alert("Presione la X para cerrar la ventana.");
    }}
  >
    <View style={styles.modalView}>
      <View style={styles.headerModal}>
        <View style={styles.headerMizq} />
        <View style={styles.margen} />
        <View style={styles.headerMDer}>
          <TouchableHighlight style={styles.openButton} onPress={onPress}>
            <Text style={styles.modalTex3}>x</Text>
          </TouchableHighlight>
        </View>
      </View>

      <View style={styles.bodyModal}>
        <Carousel
          loop={false}
          width={width * 0.8}
          height={'100%'}
          autoPlay={false}
          data={imagesJuego1}
          pagingEnabled={true}
          renderItem={({ item }) => (
            <ImageBackground source={item} style={styles.slide} resizeMode="cover" />
          )}
        />
      </View>
    </View>
  </Modal>
);

export const Modal_MenuJuego2 = ({ text, onPress = () => {} }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={text}
    onRequestClose={() => {
      Alert.alert("Presione la X para cerrar la ventana.");
    }}
  >
    <View style={styles.modalView}>
      <View style={styles.headerModal}>
        <View style={styles.headerMizq} />
        <View style={styles.margen} />
        <View style={styles.headerMDer}>
          <TouchableHighlight style={styles.openButton} onPress={onPress}>
            <Text style={styles.modalTex3}>x</Text>
          </TouchableHighlight>
        </View>
      </View>

      <View style={styles.bodyModal}>
        <Carousel
          loop={false}
          width={width * 0.8}
          height={'100%'}
          autoPlay={false}
          data={imagesJuego2}
          pagingEnabled={true}
          renderItem={({ item }) => (
            <ImageBackground source={item} style={styles.slide} resizeMode="cover" />
          )}
        />
      </View>
    </View>
  </Modal>
);

export const Modal_MenuJuego3 = ({ text, onPress = () => {} }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={text}
    onRequestClose={() => {
      Alert.alert("Presione la X para cerrar la ventana.");
    }}
  >
    <View style={styles.modalView}>
      <View style={styles.headerModal}>
        <View style={styles.headerMizq} />
        <View style={styles.margen} />
        <View style={styles.headerMDer}>
          <TouchableHighlight style={styles.openButton} onPress={onPress}>
            <Text style={styles.modalTex3}>x</Text>
          </TouchableHighlight>
        </View>
      </View>

      <View style={styles.bodyModal}>
        <Carousel
          loop={false}
          width={width * 0.8}
          height={'100%'}
          autoPlay={false}
          data={imagesJuego3}
          pagingEnabled={true}
          renderItem={({ item }) => (
            <ImageBackground source={item} style={styles.slide} resizeMode="cover" />
          )}
        />
      </View>
    </View>
  </Modal>
);

export const Modal_MenuCasos = ({ text, onPress = () => {} }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={text}
    onRequestClose={() => {
      Alert.alert("Presione la X para cerrar la ventana.");
    }}
  >
    <View style={styles.modalView}>
      <View style={styles.headerModal}>
        <View style={styles.headerMizq} />
        <View style={styles.margen} />
        <View style={styles.headerMDer}>
          <TouchableHighlight style={styles.openButton} onPress={onPress}>
            <Text style={styles.modalTex3}>x</Text>
          </TouchableHighlight>
        </View>
      </View>

      <View style={styles.bodyModal}>
        <Carousel
          loop={false}
          width={width * 0.8}
          height={'100%'}
          autoPlay={false}
          data={imagesCasos}
          pagingEnabled={true}
          renderItem={({ item }) => (
            <ImageBackground source={item} style={styles.slide} resizeMode="cover" />
          )}
        />
      </View>
    </View>
  </Modal>
);

export const Modal_MenuJuegos = ({ text, onPress = () => {} }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={text}
    onRequestClose={() => {
      Alert.alert("Presione la X para cerrar la ventana.");
    }}
  >
    <View style={styles.modalView}>
      <View style={styles.headerModal}>
        <View style={styles.headerMizq} />
        <View style={styles.margen} />
        <View style={styles.headerMDer}>
          <TouchableHighlight style={styles.openButton} onPress={onPress}>
            <Text style={styles.modalTex3}>x</Text>
          </TouchableHighlight>
        </View>
      </View>

      <View style={styles.bodyModal}>
        <Carousel
          loop={false}
          width={width * 0.8}
          height={'100%'}
          autoPlay={false}
          data={imagesJuegos}
          pagingEnabled={true}
          renderItem={({ item }) => (
            <ImageBackground source={item} style={styles.slide} resizeMode="cover" />
          )}
        />
      </View>
    </View>
  </Modal>
);

export const Modal_MenuCaso1 = ({ text, onPress = () => {} }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={text}
    onRequestClose={() => {
      Alert.alert("Presione la X para cerrar la ventana.");
    }}
  >
    <View style={styles.modalView}>
      <View style={styles.headerModal}>
        <View style={styles.headerMizq} />
        <View style={styles.margen} />
        <View style={styles.headerMDer}>
          <TouchableHighlight style={styles.openButton} onPress={onPress}>
            <Text style={styles.modalTex3}>x</Text>
          </TouchableHighlight>
        </View>
      </View>

      <View style={styles.bodyModal}>
        <Carousel
          loop={false}
          width={width * 0.8}
          height={'100%'}
          autoPlay={false}
          data={imagesCaso1}
          pagingEnabled={true}
          renderItem={({ item }) => (
            <ImageBackground source={item} style={styles.slide} resizeMode="cover" />
          )}
        />
      </View>
    </View>
  </Modal>
);

export const Modal_C1_escena1 = ({ text, onPress = () => {} }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={text}
    onRequestClose={() => {
      Alert.alert("Presione la X para cerrar la ventana.");
    }}
  >
    <View style={styles.modalView}>
      <View style={styles.headerModal}>
        <View style={styles.headerMizq} />
        <View style={styles.margen} />
        <View style={styles.headerMDer}>
          <TouchableHighlight style={styles.openButton} onPress={onPress}>
            <Text style={styles.modalTex3}>x</Text>
          </TouchableHighlight>
        </View>
      </View>

      <View style={styles.bodyModal}>
        <Carousel
          loop={false}
          width={width * 0.8}
          height={'100%'}
          autoPlay={false}
          data={imagesEscena1}
          pagingEnabled={true}
          renderItem={({ item }) => (
            <ImageBackground source={item} style={styles.slide} resizeMode="cover" />
          )}
        />
      </View>
    </View>
  </Modal>
);

export const Modal_C1_escena2 = ({ text, onPress = () => {} }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={text}
    onRequestClose={() => {
      Alert.alert("Presione la X para cerrar la ventana.");
    }}
  >
    <View style={styles.modalView}>
      <View style={styles.headerModal}>
        <View style={styles.headerMizq} />
        <View style={styles.margen} />
        <View style={styles.headerMDer}>
          <TouchableHighlight style={styles.openButton} onPress={onPress}>
            <Text style={styles.modalTex3}>x</Text>
          </TouchableHighlight>
        </View>
      </View>

      <View style={styles.bodyModal}>
        <Carousel
          loop={false}
          width={width * 0.8}
          height={'100%'}
          autoPlay={false}
          data={imagesEscena2}
          pagingEnabled={true}
          renderItem={({ item, index }) => (
            <ImageBackground
              key={index}
              source={item}
              style={styles.slide}
              resizeMode={
                index === 2 || index === 4 ? 'contain' : 'cover'
              }
            />
          )}
        />
      </View>
    </View>
  </Modal>
);

export const Modal_C1_escena3 = ({ text, onPress = () => {} }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={text}
    onRequestClose={() => {
      Alert.alert("Presione la X para cerrar la ventana.");
    }}
  >
    <View style={styles.modalView}>
      <View style={styles.headerModal}>
        <View style={styles.headerMizq} />
        <View style={styles.margen} />
        <View style={styles.headerMDer}>
          <TouchableHighlight style={styles.openButton} onPress={onPress}>
            <Text style={styles.modalTex3}>x</Text>
          </TouchableHighlight>
        </View>
      </View>

      <View style={styles.bodyModal}>
        <Carousel
          loop={false}
          width={width * 0.8}
          height={'100%'}
          autoPlay={false}
          pagingEnabled={true}
          data={imagesEscena3}
          renderItem={({ item, index }) => (
            <ImageBackground
              key={index}
              source={item}
              style={styles.slide}
              resizeMode="contain"
            />
          )}
        />
      </View>
    </View>
  </Modal>
);

export const Modal_Preguntas = ({ text, onPress = () => {} }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={text}
    onRequestClose={() => {
      Alert.alert("Presione la X para cerrar la ventana.");
    }}
  >
    <View style={styles.modalView}>
      <View style={styles.headerModal}>
        <View style={styles.headerMizq} />
        <View style={styles.margen} />
        <View style={styles.headerMDer}>
          <TouchableHighlight style={styles.openButton} onPress={onPress}>
            <Text style={styles.modalTex3}>x</Text>
          </TouchableHighlight>
        </View>
      </View>

      <View style={styles.bodyModal}>
        <Carousel
          loop={false}
          width={width * 0.8}
          height={'100%'}
          autoPlay={false}
          pagingEnabled={true}
          data={imagesPreguntas}
          renderItem={({ item, index }) => (
            <ImageBackground
              key={index}
              source={item}
              style={styles.slide}
              resizeMode="contain"
            />
          )}
        />
      </View>
    </View>
  </Modal>
);

export const Modal_Pruebas = ({ text, onPress = () => {} }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={text}
    onRequestClose={() => {
      Alert.alert("Presione la X para cerrar la ventana.");
    }}
  >
    <View style={styles.modalView}>
      <View style={styles.headerModal}>
        <View style={styles.headerMizq} />
        <View style={styles.margen} />
        <View style={styles.headerMDer}>
          <TouchableHighlight style={styles.openButton} onPress={onPress}>
            <Text style={styles.modalTex3}>x</Text>
          </TouchableHighlight>
        </View>
      </View>

      <View style={styles.bodyModal}>
        <Carousel
          loop={false}
          width={width * 0.8}
          height={'100%'}
          autoPlay={false}
          pagingEnabled={true}
          data={imagesPruebas}
          renderItem={({ item, index }) => (
            <ImageBackground
              key={index}
              source={item}
              style={styles.slide}
              resizeMode="contain"
            />
          )}
        />
      </View>
    </View>
  </Modal>
);

export const Modal_Valoracion = ({ text, onPress = () => {} }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={text}
    onRequestClose={() => {
      Alert.alert("Presione la X para cerrar la ventana.");
    }}
  >
    <View style={styles.modalView}>
      <View style={styles.headerModal}>
        <View style={styles.headerMizq} />
        <View style={styles.margen} />
        <View style={styles.headerMDer}>
          <TouchableHighlight style={styles.openButton} onPress={onPress}>
            <Text style={styles.modalTex3}>x</Text>
          </TouchableHighlight>
        </View>
      </View>

      <View style={styles.bodyModal}>
        <Carousel
          loop={false}
          width={width * 0.8}
          height={'100%'}
          autoPlay={false}
          pagingEnabled={true}
          data={imagesValoracion}
          renderItem={({ item, index }) => (
            <ImageBackground
              key={index}
              source={item}
              style={styles.slide}
              resizeMode="cover"
            />
          )}
        />
      </View>
    </View>
  </Modal>
);

export const Modal_Teoria = ({ text, onPress = () => {} }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={text}
    onRequestClose={() => {
      Alert.alert("Presione la X para cerrar la ventana.");
    }}
  >
    <View style={styles.modalView}>
      <View style={styles.headerModal}>
        <View style={styles.headerMizq} />
        <View style={styles.margen} />
        <View style={styles.headerMDer}>
          <TouchableHighlight style={styles.openButton} onPress={onPress}>
            <Text style={styles.modalTex3}>x</Text>
          </TouchableHighlight>
        </View>
      </View>

      <View style={styles.bodyModal}>
        <Carousel
          loop={false}
          width={width * 0.8}
          height={'100%'}
          autoPlay={false}
          pagingEnabled={true}
          data={imagesTeoria}
          renderItem={({ item, index }) => (
            <ImageBackground
              key={index}
              source={item}
              style={styles.slide}
              resizeMode="cover"
            />
          )}
        />
      </View>
    </View>
  </Modal>
);