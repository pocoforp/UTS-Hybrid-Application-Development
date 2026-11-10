import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, StatusBar, useWindowDimensions, Pressable } from 'react-native';
import CourseCard from '../components/CourseCard';
import { COURSES } from '../data/courses';

const HomeScreen = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const isDesktop = width > 768;

  const renderItem = ({ item }) => (
    <CourseCard course={item} onPress={() => navigation.navigate('Detail', { course: item })} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F4F6" />
      <View style={[styles.contentWrapper, isDesktop && styles.desktopWrapper]}>
        
        <View style={styles.header}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.dateText}>DASHBOARD</Text>
            <Text style={styles.headerTitle}>Hastuardy Pandu.</Text>
          </View>
          <Pressable 
            onPress={() => navigation.navigate('Profile')}
            style={({ hovered, pressed }) => [styles.avatar, hovered && { transform: [{scale: 1.05}], borderColor: '#111827' }, pressed && { transform: [{scale: 0.95}] }]}
          >
            <Text style={styles.avatarText}>HP</Text>
          </Pressable>
        </View>

        <View style={styles.searchSection}>
          <Pressable style={({ hovered }) => [styles.searchBar, hovered && styles.searchBarHover]}>
            <Text style={styles.searchIcon}>⌘ K</Text>
            <Text style={styles.searchText}>Search for courses, skills, or mentors...</Text>
          </Pressable>
        </View>
        
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Curated Paths</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>
        
        <FlatList
          data={COURSES}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          numColumns={isDesktop ? 2 : 1}
          key={isDesktop ? 'desktop' : 'mobile'}
          columnWrapperStyle={isDesktop ? { justifyContent: 'space-between' } : null}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F4F6' },
  contentWrapper: { flex: 1, width: '100%', alignSelf: 'center' },
  desktopWrapper: { maxWidth: 1200 }, // Max width for ultrawide screens
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', paddingHorizontal: 24, paddingTop: 40, paddingBottom: 24 },
  headerTextContainer: { flex: 1 },
  dateText: { fontSize: 12, color: '#6B7280', fontWeight: '800', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 1.5 },
  headerTitle: { fontSize: 32, fontWeight: '900', color: '#111827', letterSpacing: -1 },
  avatar: { width: 56, height: 56, borderRadius: 28, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#E5E7EB', transitionDuration: '0.2s' },
  avatarText: { color: '#111827', fontWeight: '800', fontSize: 18 },
  searchSection: { paddingHorizontal: 24, paddingBottom: 32 },
  searchBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', paddingHorizontal: 20, paddingVertical: 18, borderRadius: 20, borderWidth: 1, borderColor: '#E5E7EB', transitionDuration: '0.2s' },
  searchBarHover: { borderColor: '#111827', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 12, elevation: 2 },
  searchIcon: { backgroundColor: '#F3F4F6', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6, fontSize: 12, fontWeight: '700', color: '#4B5563', marginRight: 16, overflow: 'hidden' },
  searchText: { color: '#9CA3AF', fontSize: 16, fontWeight: '500' },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, paddingBottom: 20 },
  sectionTitle: { fontSize: 20, fontWeight: '800', color: '#111827' },
  seeAll: { fontSize: 14, fontWeight: '700', color: '#4F46E5' },
  list: { paddingHorizontal: 24, paddingBottom: 60 }
});

export default HomeScreen;
