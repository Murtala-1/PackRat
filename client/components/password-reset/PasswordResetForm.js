// frontend/components/PasswordResetForm.js
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Input, Text, Toast } from "native-base";
import { useSearchParams } from "expo-router";
import axios from "axios";
import { api } from "../../constants/api";

export const PasswordResetForm = ({ token }) => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // const { token } = useSearchParams();

  const handlePasswordReset = async () => {
    try {
      setLoading(true);
      await axios.post(`${api}/password-reset/${token}`, { password });
      setPassword("");
      setLoading(false);
      Toast.show({
        title: "Password reset successful",
        style: { backgroundColor: "red" },
        placement: "top-right",
        duration: 3000,
      });
    } catch (error) {
      console.log("Error here", error);
      setLoading(false);
      Toast.show({
        title: "Error resetting password",
        duration: 5000,
        placement: "top-right",
        style: { backgroundColor: "red" },
      });
    }
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="New Password"
        secureTextEntry
        value={password}
        onChangeText={(value) => setPassword(value)}
      />
      <Button
        block
        style={styles.button}
        onPress={handlePasswordReset}
        disabled={!password || loading}
      >
        <Text>{loading ? "Loading..." : "Reset Password"}</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 20,
  },
});
