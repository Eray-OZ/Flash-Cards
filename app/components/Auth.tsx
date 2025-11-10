import React, { useState } from 'react'
import { Alert, StyleSheet, TouchableOpacity, View, TextInput, Text, Image } from 'react-native'
import { supabase } from '../lib/supabase'
import { router } from 'expo-router'
import styles from '../../styles/AuthStyle.js'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
    router.replace('/CardDeck')
  }

  async function signUpWithEmail() {
    setLoading(true)
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    if (!session) Alert.alert('Please check your inbox for email verification!')
    setLoading(false)
    router.replace('/CardDeck')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Flashcards</Text>
      <TextInput
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="email@address.com"
        autoCapitalize={'none'}
        style={styles.input}
        placeholderTextColor="#a0a0a0"
      />
      <TextInput
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
        placeholder="Password"
        autoCapitalize={'none'}
        style={styles.input}
        placeholderTextColor="#a0a0a0"
      />

      <TouchableOpacity style={styles.button} disabled={loading} onPress={() => signInWithEmail()}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} disabled={loading} onPress={() => signUpWithEmail()}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.supabaseContainer}>
        <Text style={styles.supabaseText}>Powered by </Text>
        <Image
          source={{ uri: 'https://logo.svgcdn.com/logos/supabase-icon.png' }}
          style={styles.supabaseLogo}
        />
        <Text style={styles.supabaseText}> Supabase</Text>
      </View>
    </SafeAreaView>
  )
}