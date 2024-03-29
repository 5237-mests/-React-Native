import { Image, StyleSheet } from "react-native";


function ImageViewer({placeHolderImage, selectedImage}) {
  const imageSource = selectedImage !== null ? { uri: selectedImage } : placeHolderImage
  return (
        <Image source={imageSource} style={styles.image} />
  )
}

export default ImageViewer

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
    // resizeMode: "contain",
  },
});
