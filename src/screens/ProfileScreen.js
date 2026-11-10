import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Alert, useWindowDimensions, ScrollView, Platform, Pressable } from 'react-native';
import CustomButton from '../components/CustomButton';

const ProfileScreen = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const isWide = width > 768;

  const handleLogout = () => {
    if (Platform.OS === 'web') {
      if (window.confirm("Are you sure you want to log out?")) navigation.replace('Auth');
    } else {
      Alert.alert("Log Out", "Are you sure you want to log out?", [
        { text: "Cancel", style: "cancel" },
        { text: "Log Out", onPress: () => navigation.replace('Auth'), style: 'destructive' }
      ]);
    }
  };

  const MenuItem = ({ icon, title, isDanger }) => (
    <Pressable style={({ hovered }) => [styles.menuItem, hovered && styles.menuItemHovered]}>
      <Text style={[styles.menuIcon, isDanger && { color: '#EF4444' }]}>{icon}</Text>
      <Text style={[styles.menuText, isDanger && { color: '#EF4444' }]}>{title}</Text>
      <Text style={styles.menuArrow}>→</Text>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: 'center', flexGrow: 1 }} style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        
        <View style={styles.headerBar}>
          <CustomButton title="← Back" onPress={() => navigation.navigate('Home')} variant="secondary" style={styles.backBtn} />
          <Text style={styles.headerTitle}>Profile</Text>
          <View style={{ width: 80 }} /> 
        </View>

        <View style={[styles.content, isWide && styles.contentWide]}>
          <View style={styles.profileHeader}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>HP</Text>
            </View>
            <Text style={styles.name}>Hastuardy Pandu Mahendra</Text>
            <Text style={styles.email}>hastuardy.mahendra@binus.ac.id</Text>
            <View style={styles.badge}><Text style={styles.badgeText}>ID: 2802423506</Text></View>
          </View>

          <Text style={styles.sectionLabel}>ACCOUNT</Text>
          <View style={styles.menuGroup}>
            <MenuItem icon="◈" title="Personal Information" />
            <MenuItem icon="💳" title="Billing & Payments" />
            <MenuItem icon="🔐" title="Security Settings" />
          </View>

          <Text style={styles.sectionLabel}>LEARNING</Text>
          <View style={styles.menuGroup}>
            <MenuItem icon="📚" title="My Enrollments" />
            <MenuItem icon="📜" title="Certificates" />
          </View>
          
          <View style={styles.actionContainer}>
            <CustomButton title="Log Out Securely" onPress={handleLogout} variant="danger" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F4F6' },
  headerBar: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingHorizontal: 24, paddingTop: 20 },
  backBtn: { width: 80, paddingVertical: 10, paddingHorizontal: 12, borderRadius: 10, marginVertical: 0 },
  headerTitle: { fontSize: 18, fontWeight: '700', color: '#111827' },
  content: { width: '100%', padding: 24, paddingBottom: 60 },
  contentWide: { maxWidth: 600, alignSelf: 'center' },
  profileHeader: { alignItems: 'center', marginBottom: 40, marginTop: 20 },
  avatar: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', marginBottom: 20, borderWidth: 4, borderColor: '#E5E7EB', shadowColor: '#000', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.08, shadowRadius: 16, elevation: 4 },
  avatarText: { fontSize: 36, fontWeight: '900', color: '#111827', letterSpacing: -1 },
  name: { fontSize: 26, fontWeight: '800', color: '#111827', marginBottom: 8, textAlign: 'center', letterSpacing: -0.5 },
  email: { fontSize: 16, color: '#6B7280', marginBottom: 20, fontWeight: '500' },
  badge: { backgroundColor: '#E5E7EB', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20 },
  badgeText: { fontSize: 13, fontWeight: '700', color: '#374151', letterSpacing: 1 },
  sectionLabel: { fontSize: 13, fontWeight: '800', color: '#9CA3AF', marginBottom: 12, marginLeft: 12, letterSpacing: 1 },
  menuGroup: { backgroundColor: '#FFFFFF', borderRadius: 24, padding: 8, marginBottom: 32, borderWidth: 1, borderColor: '#E5E7EB', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.02, shadowRadius: 8, elevation: 2 },
  menuItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 18, paddingHorizontal: 16, borderRadius: 16, transitionDuration: '0.2s' },
  menuItemHovered: { backgroundColor: '#F9FAFB', transform: [{ translateX: 4 }] },
  menuIcon: { fontSize: 20, marginRight: 16, color: '#4B5563' },
  menuText: { flex: 1, fontSize: 16, fontWeight: '600', color: '#111827' },
  menuArrow: { fontSize: 16, color: '#D1D5DB', fontWeight: 'bold' },
  actionContainer: { marginTop: 12 },
});

export default ProfileScreen;
