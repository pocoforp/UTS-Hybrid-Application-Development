import React from 'react';
import { View, Text, Image, Pressable, StyleSheet, useWindowDimensions } from 'react-native';

const CourseCard = ({ course, onPress }) => {
  const { width } = useWindowDimensions();
  const cardWidth = width > 768 ? '48%' : '100%'; // Grid layout for desktop

  return (
    <Pressable 
      onPress={onPress}
      style={({ pressed, hovered }) => [
        styles.card,
        { width: cardWidth },
        hovered && styles.cardHovered,
        pressed && styles.cardPressed
      ]}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: course.image }} style={styles.image} />
        <View style={styles.levelBadge}>
          <Text style={styles.levelText}>{course.level}</Text>
        </View>
      </View>
      
      <View style={styles.info}>
        <View style={styles.metaRow}>
          <Text style={[styles.categoryText, { color: course.color }]}>● {course.category}</Text>
          <View style={styles.ratingBadge}>
            <Text style={styles.ratingText}>★ {course.rating}</Text>
          </View>
        </View>
        
        <Text style={styles.title} numberOfLines={2}>{course.title}</Text>
        <Text style={styles.instructor}>{course.instructor}</Text>
        
        <View style={styles.footer}>
          <Text style={styles.price}>{course.price}</Text>
          <View style={styles.actionArrow}>
            <Text style={styles.arrowText}>↗</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    overflow: 'hidden',
    transitionDuration: '0.3s', // CSS transition for web
  },
  cardHovered: {
    transform: [{ translateY: -6 }],
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 8,
    borderColor: '#E2E8F0',
  },
  cardPressed: {
    transform: [{ translateY: -2 }],
    opacity: 0.95,
  },
  imageContainer: { padding: 12, paddingBottom: 0, position: 'relative' },
  image: { width: '100%', height: 200, borderRadius: 16, backgroundColor: '#F3F4F6' },
  levelBadge: {
    position: 'absolute', top: 24, left: 24,
    backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(4px)',
    paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20,
  },
  levelText: { fontSize: 12, fontWeight: '800', color: '#111827', textTransform: 'uppercase', letterSpacing: 0.5 },
  info: { padding: 24 },
  metaRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  categoryText: { fontSize: 13, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.5 },
  ratingBadge: { backgroundColor: '#F8FAFC', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8, borderWidth: 1, borderColor: '#F1F5F9' },
  ratingText: { fontSize: 13, fontWeight: '700', color: '#0F172A' },
  title: { fontSize: 20, fontWeight: '800', color: '#111827', marginBottom: 8, lineHeight: 28, letterSpacing: -0.5 },
  instructor: { fontSize: 15, color: '#6B7280', fontWeight: '500', marginBottom: 20 },
  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 20, borderTopWidth: 1, borderTopColor: '#F3F4F6' },
  price: { fontSize: 18, fontWeight: '800', color: '#111827' },
  actionArrow: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#F3F4F6', alignItems: 'center', justifyContent: 'center' },
  arrowText: { fontSize: 18, color: '#4B5563', fontWeight: '600' }
});

export default CourseCard;
