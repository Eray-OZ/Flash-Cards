import { StyleSheet } from 'react-native';

const rem = 16;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1c1e',
    padding: rem,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 2 * rem,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 2 * rem,
  },
  input: {
    backgroundColor: '#2c2f33',
    color: 'white',
    padding: rem,
    borderRadius: 0.5 * rem,
    marginBottom: rem,
  },
  button: {
    backgroundColor: '#3ecf8e',
    padding: rem,
    borderRadius: 0.5 * rem,
    alignItems: 'center',
    marginBottom: rem,
  },
  buttonText: {
    color: '#1a1c1e',
    fontWeight: 'bold',
    fontSize: rem,
  },
  supabaseContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2 * rem,
  },
  supabaseLogo: {
    width: 20,
    height: 20,
    marginLeft: 0.2 * rem,
  },
  supabaseText: {
    color: 'white',
    fontSize: 0.8 * rem,
  },
});

export default styles;
