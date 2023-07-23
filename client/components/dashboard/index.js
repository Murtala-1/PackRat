import React from "react";
import { Platform, StyleSheet } from "react-native";
import { VStack, Box } from "native-base";
import { theme } from "../../theme";
import HeroBanner from "./HeroBanner";
import QuickActionsSection from "./QuickActionSection";
import FeedPreview from "./FeedPreview";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

const Dashboard = () => {
  return (
    <VStack
      style={[
        styles.container,
        Platform.OS === "web" ? { minHeight: "100vh" } : null,
      ]}
    >
      <Box contentContainerStyle={styles.content}>
        <HeroBanner style={styles.cardContainer} />

        <Section>
          <SectionHeader iconName="add-circle-outline" text="Quick Actions" />
          <QuickActionsSection />
        </Section>

        <Section>
          <SectionHeader iconName="newspaper-outline" text="Feed" />
          <FeedPreview />
        </Section>
      </Box>
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: theme.colors.background,
    width: "100%",
  },
  content: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    paddingHorizontal: 20,
  },
  cardContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 20,
    width: "100%",
  },
});

export default Dashboard;
