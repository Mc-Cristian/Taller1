import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';

export const Registro = () => {
  const [nombre, setNombre] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [contraseña, setContraseña] = React.useState('');
  const [verificarContraseña, setVerificarContraseña] = React.useState('');

  const handleRegister = () => {
    console.log('Registrarse');

  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.Title}>Registro Usuario</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.Container2}>
          <Text style={styles.Text}>Nombre:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setNombre}
            value={nombre}
            placeholder="Ingrese su nombre"
            placeholderTextColor="#BDC3C7" 
          />
        </View>
        <View style={styles.Container2}>
          <Text style={styles.Text}>Email:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Ingrese su email"
            placeholderTextColor="#BDC3C7" 
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
            placeholderTextColor="#BDC3C7" 
          />
        </View>
        <View style={styles.Container2}>
          <Text style={styles.Text}>Verificar tu Contraseña:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setVerificarContraseña}
            value={verificarContraseña}
            placeholder="Ingrese su contraseña nuevamente"
            secureTextEntry
            placeholderTextColor="#BDC3C7" 
          />
        </View>
        <TouchableOpacity 
          style={styles.button}
          onPress={handleRegister}
        >
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#34495E',
    textAlign: 'center',
    marginBottom: 30,
  },
  container: {
    backgroundColor: '#DFF0D8', 
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  formContainer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 6, 
  },
  Container2: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#000000', 
    borderWidth: 2,
    borderRadius: 30,
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
    backgroundColor: '#3498DB', 
    paddingVertical: 15,
    borderRadius: 30, 
    alignItems: 'center',
    shadowOffset: { width: 0, height: 4 },
    
    
  },
  buttonText: {
    color: '#FFFFFF', 
    fontSize: 18,
    fontWeight: 'bold',
  },
});
