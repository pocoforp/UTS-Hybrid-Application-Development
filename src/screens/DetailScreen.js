import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, useWindowDimensions, Platform } from 'react-native';
import CustomButton from '../components/CustomButton';

const DetailScreen = ({ route, navigation }) => {
  const { course } = route.params;
  const { width } = useWindowDimensions();
  const isWide = width > 768;

  const handleEnroll = () => {
    Platform.OS === 'web' ? window.alert('Endpoint pendaftaran belum terhubung.') : alert('Endpoint pendaftaran belum terhubung.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: 120, flexGrow: 1 }} style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        
        <View style={styles.heroSection}>
          <Image source={{ uri: course.image }} style={styles.heroImage} />
          <View style={styles.heroOverlay} />
          
          <View style={[styles.heroContent, isWide && styles.heroContentWide]}>
            <View style={[styles.badge, { backgroundColor: course.color }]}><Text style={styles.badgeText}>{course.category}</Text></View>
            <Text style={styles.heroTitle}>{course.title}</Text>
            <View style={styles.heroMeta}>
              <View style={styles.instructorAvatar} />
              <Text style={styles.heroInstructor}>By {course.instructor}</Text>
              <Text style={styles.heroDot}>•</Text>
              <Text style={styles.heroRating}>★ {course.rating} Rating</Text>
            </View>
          </View>
        </View>

        <View style={[styles.mainContent, isWide && styles.mainContentWide]}>
          <View style={styles.infoGrid}>
            <View style={styles.infoCard}>
              <Text style={styles.infoLabel}>Level</Text>
              <Text style={styles.infoValue}>{course.level}</Text>
            </View>
            <View style={styles.infoCard}>
              <Text style={styles.infoLabel}>Duration</Text>
              <Text style={styles.infoValue}>{course.duration}</Text>
            </View>
            <View style={styles.infoCard}>
              <Text style={styles.infoLabel}>Investment</Text>
              <Text style={styles.infoValue}>{course.price}</Text>
            </View>
          </View>

          <View style={styles.textContent}>
            <Text style={styles.sectionTitle}>About This Program</Text>
            <Text style={styles.description}>{course.description}</Text>
            <Text style={styles.description}>This comprehensive curriculum is designed to push your boundaries. You will work on real-world projects, guided by industry experts, ensuring you gain practical skills that are immediately applicable in the modern workplace.</Text>
          </View>
        </View>
      </ScrollView>

      {/* Sticky Bottom Action Bar */}
      <View style={[styles.bottomBar, isWide && styles.bottomBarWide]}>
        <View style={styles.bottomBarContent}>
          <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>Total Price</Text>
            <Text style={styles.priceText}>{course.price}</Text>
          </View>
          <View style={styles.actionButtons}>
            <CustomButton title="Back" onPress={() => navigation.navigate('Home')} variant="secondary" style={styles.flexBtn} />
            <CustomButton title="Enroll Now" onPress={handleEnroll} variant="primary" style={styles.flexBtn} color={course.color} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  heroSection: { width: '100%', height: 420, position: 'relative', justifyContent: 'flex-end' },
  heroImage: { ...StyleSheet.absoluteFillObject, width: '100%', height: '100%', resizeMode: 'cover' },
  heroOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(17,24,39,0.7)', backgroundImage: 'linear-gradient(to top, rgba(17,24,39,1), rgba(17,24,39,0.2))' }, // Web gradient fallback
  heroContent: { padding: 24, paddingBottom: 40, width: '100%' },
  heroContentWide: { maxWidth: 1000, alignSelf: 'center', paddingHorizontal: 40 },
  badge: { alignSelf: 'flex-start', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8, marginBottom: 20 },
  badgeText: { color: '#FFF', fontSize: 13, fontWeight: '800', textTransform: 'uppercase', letterSpacing: 1 },
  heroTitle: { fontSize: 36, fontWeight: '900', color: '#FFFFFF', marginBottom: 20, lineHeight: 44, letterSpacing: -1 },
  heroMeta: { flexDirection: 'row', alignItems: 'center' },
  instructorAvatar: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#E5E7EB', marginRight: 12 },
  heroInstructor: { fontSize: 16, color: '#F3F4F6', fontWeight: '500' },
  heroDot: { fontSize: 16, color: '#6B7280', marginHorizontal: 12 },
  heroRating: { fontSize: 16, color: '#FBBF24', fontWeight: '700' },
  mainContent: { width: '100%', padding: 24, backgroundColor: '#FFFFFF' },
  mainContentWide: { maxWidth: 1000, alignSelf: 'center', paddingHorizontal: 40 },
  infoGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 16, marginTop: -60, marginBottom: 40, zIndex: 10 },
  infoCard: { flex: 1, minWidth: 100, backgroundColor: '#FFFFFF', padding: 20, borderRadius: 20, borderWidth: 1, borderColor: '#F3F4F6', shadowColor: '#000', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.04, shadowRadius: 16, elevation: 4 },
  infoLabel: { fontSize: 13, color: '#6B7280', fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 8 },
  infoValue: { fontSize: 18, fontWeight: '900', color: '#111827' },
  textContent: { paddingBottom: 40 },
  sectionTitle: { fontSize: 22, fontWeight: '800', color: '#111827', marginBottom: 16 },
  description: { fontSize: 16, lineHeight: 28, color: '#4B5563', marginBottom: 20 },
  bottomBar: { position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#FFFFFF', borderTopWidth: 1, borderTopColor: '#F3F4F6', paddingVertical: 16, paddingHorizontal: 24 },
  bottomBarWide: { paddingHorizontal: 40 },
  bottomBarContent: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', maxWidth: 1000, alignSelf: 'center', width: '100%' },
  priceContainer: { flex: 1 },
  priceLabel: { fontSize: 13, color: '#6B7280', fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 4 },
  priceText: { fontSize: 24, fontWeight: '900', color: '#111827' },
  actionButtons: { flexDirection: 'row', gap: 12, flex: 1.5, justifyContent: 'flex-end' },
  flexBtn: { flex: 1, marginVertical: 0, paddingVertical: 14 }
});

export default DetailScreen;
