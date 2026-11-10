import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, useWindowDimensions, Alert, Image } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const AuthScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { width } = useWindowDimensions();
  const isWide = width > 768; // Desktop breakpoint

  const handleLogin = () => {
    if (email === '' || password === '') {
      Platform.OS === 'web' ? window.alert('Validasi Gagal: Email dan Password wajb diisi.') : Alert.alert('Validasi Gagal', 'Email dan Password wajb diisi.');
    } else {
      navigation.replace('Home');
    }
  };

  const formContent = (
    <View style={styles.formContainer}>
      <View style={styles.header}>
        <View style={styles.logoMark}><Text style={styles.logoText}>E.</Text></View>
        <Text style={styles.title}>Welcome back.</Text>
        <Text style={styles.subtitle}>Enter your details to access your learning dashboard.</Text>
      </View>
      
      <CustomInput label="Email Address" placeholder="hastuardy.mahendra@binus.ac.id" value={email} onChangeText={setEmail} />
      <CustomInput label="Password" placeholder="••••••••" value={password} onChangeText={setPassword} secureTextEntry={true} />
      
      <View style={styles.actionContainer}>
        <CustomButton title="Log In" onPress={handleLogin} variant="primary" />
        <CustomButton title="Create an Account" onPress={() => {}} variant="secondary" />
      </View>
    </View>
  );

  if (isWide) {
    return (
      <View style={styles.splitContainer}>
        <View style={styles.leftPane}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop' }} style={styles.coverImage} />
          <View style={styles.overlay}>
            <Text style={styles.quote}>"Education is not the learning of facts, but the training of the mind to think."</Text>
            <Text style={styles.quoteAuthor}>— Albert Einstein</Text>
          </View>
        </View>
        <View style={styles.rightPane}>
          <ScrollView contentContainerStyle={styles.scrollCenter} showsVerticalScrollIndicator={false}>{formContent}</ScrollView>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scrollCenter} showsVerticalScrollIndicator={false}>{formContent}</ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  splitContainer: { flex: 1, flexDirection: 'row', backgroundColor: '#FFFFFF' },
  leftPane: { flex: 1.2, position: 'relative' },
  coverImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  overlay: { position: 'absolute', bottom: 60, left: 60, right: 60, padding: 40, backgroundColor: 'rgba(17, 24, 39, 0.8)', backdropFilter: 'blur(10px)', borderRadius: 24 },
  quote: { fontSize: 24, color: '#FFFFFF', fontWeight: '600', lineHeight: 34, fontStyle: 'italic', marginBottom: 16 },
  quoteAuthor: { fontSize: 16, color: '#9CA3AF', fontWeight: '500' },
  rightPane: { flex: 1, padding: 40 },
  scrollCenter: { flexGrow: 1, justifyContent: 'center', padding: 24 },
  formContainer: { width: '100%', maxWidth: 440, alignSelf: 'center' },
  header: { marginBottom: 48 },
  logoMark: { width: 56, height: 56, borderRadius: 16, backgroundColor: '#111827', alignItems: 'center', justifyContent: 'center', marginBottom: 24 },
  logoText: { color: '#FFFFFF', fontSize: 24, fontWeight: '900' },
  title: { fontSize: 36, fontWeight: '800', color: '#111827', marginBottom: 12, letterSpacing: -1 },
  subtitle: { fontSize: 16, color: '#6B7280', lineHeight: 24 },
  actionContainer: { gap: 12, marginTop: 12 },
});

export default AuthScreen;
