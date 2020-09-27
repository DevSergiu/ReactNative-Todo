import React from 'react'
import { StyleSheet, View } from 'react-native'
import AddTodo from '../components/AddTodo'

export const TodoScreen = props => {
  return (
    <View>

      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={todos}
        renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} />}
      />
    </View>
  );

}

const styles = StylesSheet.create({})
