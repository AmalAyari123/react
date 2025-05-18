import React, { useEffect } from "react";
import { FlatList, View , Text } from "react-native";
import ListItem from "../components/ListItem";
import ListItemDelete from "../components/ListItemDelete";
import useApi from "../hooks/useApi";
import messagesApi from "../api/messagesApi";
import colors from "../config/colors";

const MessagesScreen = () => {
  const { data: messages, request: fetchMessages, loading, setData: setMessages } = useApi(messagesApi.getMessages);

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleRefresh = () => {
    fetchMessages();
  };

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <View style={{marginTop  : 40}}>
    <FlatList
      data={messages}
      keyExtractor={(message) => message.id.toString()}
      renderItem={({ item }) => (
        <ListItem
          title={item.content}
          subtitle={`${item.fromUser.name}`}
          image={require("../assets/logo-red.png")}
          onPress={() => console.log("Message pressed")}
          renderRight={() => <ListItemDelete onPress={() => handleDelete(item)} />}
        />
      )}
      ItemSeparatorComponent={() => (
        <View style={{ width: "100%", height: 1, backgroundColor: colors.light} }/>
      )}
      refreshing={loading}
      onRefresh={handleRefresh}
      ListEmptyComponent={
        !loading ? (
          <View style={{ padding: 20, alignItems: "center" }}>
            <Text style={{ color: colors.medium }}>No messages yet.</Text>
          </View>
        ) : null
      }
      
    />
    </View>
  );
};

export default MessagesScreen;
