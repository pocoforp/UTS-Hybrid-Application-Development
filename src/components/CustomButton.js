import React from 'react';
import { Pressable, Text, StyleSheet, Platform, Animated } from 'react-native';

const CustomButton = ({ title, onPress, style, variant = 'primary', color = '#111827' }) => {
  const isPrimary = variant === 'primary';
  const isDanger = variant === 'danger';

  const baseBg = isDanger ? '#FEE2E2' : (isPrimary ? color : '#FFFFFF');
  const hoverBg = isDanger ? '#FECACA' : (isPrimary ? '#000000' : '#F3F4F6');
  const textColor = isDanger ? '#DC2626' : (isPrimary ? '#FFFFFF' : '#111827');

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed, hovered }) => [
        styles.button,
        { backgroundColor: baseBg },
        hovered && { backgroundColor: hoverBg, transform: [{ translateY: -2 }], shadowOpacity: 0.15 },
        pressed && { transform: [{ translateY: 1 }], opacity: 0.9 },
        !isPrimary && !isDanger && styles.borderProps,
        style
      ]}
    >
      {({ hovered }) => (
        <Text style={[styles.text, { color: textColor }]}>
          {title} {hovered && variant === 'secondary' ? '→' : ''}
        </Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 18,
    paddingHorizontal: 28,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0,
    shadowRadius: 8,
    elevation: 0,
    transitionDuration: '0.2s', // Web transition
  },
  borderProps: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: -0.3,
  }
});

export default CustomButton;
