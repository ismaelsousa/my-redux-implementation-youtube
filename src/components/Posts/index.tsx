import React from "react";
import { Button, Text, View } from "react-native";
import useDispatch from "../../redux/Hooks/useDispatch";
import useSelector from "../../redux/Hooks/useSelector";
import { PostsState } from "../../store/modules/posts";
import { addPost } from "../../store/modules/posts/actions";

const Posts: React.FC = () => {
  const dispatch = useDispatch();
  const state: PostsState = useSelector((state) => state.posts);

  
  const handleAddPost = () => {
    dispatch(
      addPost({
        description: `New post ${state.list.length + 1}`,
        url: "https://www.google.com",
      })
    );
  };

  return (
    <View>
      <Text>Posts: {state.list.length}</Text>
      <Button onPress={handleAddPost} title="Add Post" />
    </View>
  );
};

export default Posts;
