import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';

export const Inicio = () => {
  const [nombre, setNombre] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [contraseña, setContraseña] = React.useState('');

  const handleLogin = () => {
    console.log('Iniciar sesión');
    // Aquí puedes agregar la lógica para manejar el inicio de sesión
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.Title}>Inicio Sesión</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.Container2}>
          <Text style={styles.Text}>Nombre:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setNombre}
            value={nombre}
            placeholder="Ingrese su nombre"
          />
        </View>
        <View style={styles.Container2}>
          <Text style={styles.Text}>Email:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Ingrese su email"
          />
        </View>
        <View style={styles.Container2}>
          <Text style={styles.Text}>Contraseña:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setContraseña}
            value={contraseña}
            placeholder="Ingrese su contraseña"
            secureTextEntry
          />
        </View>
        
        <TouchableOpacity 
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 30,
  },
  container: {
    backgroundColor: '#A9DFBF', // Fondo verde claro
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  formContainer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5, // Esto añade sombra en dispositivos Android
  },
  Container2: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#000000', // Color del borde
    borderWidth: 1,
    borderRadius: 25, // Bordes redondeados
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    marginBottom: 10,
  },
  Text: {
    marginBottom: 8,
    fontSize: 18,
    color: '#2C3E50',
  },
  button: {
    backgroundColor: '#3498DB', // Color azul del botón
    paddingVertical: 15,
    borderRadius: 25, // Bordes redondeados del botón
    alignItems: 'center',
  
  
  },
  buttonText: {
    color: '#FFFFFF', // Texto blanco del botón
    fontSize: 18,
    fontWeight: 'bold',
  },
});
