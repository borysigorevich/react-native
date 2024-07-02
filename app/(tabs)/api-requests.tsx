import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    Button,
    FlatList,
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";

type PostType = {
    "userId": number
    "id": number
    "title": string
    "body": string
}

const ApiRequests = () => {

    const [posts, setPosts] = useState<PostType[]>([])
    const [loading, setLoading] = useState(true)
    const [refreshing, setRefreshing] = useState(false)
    const [postTitle, setPostTitle] = useState('')
    const [postBody, setPostBody] = useState('')
    const [isPosting, setIsPosting] = useState(false)
    const [error, setError] = useState('')

    const getPosts = async (limit: number = 10) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
            const data = await response.json();

            setPosts(data);
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setLoading(false);
            setError('')
        } catch (e) {
            setError('Something went wrong')
            console.error(e)
            setLoading(false)
        }
    }

    const handlePost = async () => {
        setIsPosting(true)
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?`, {
                method: 'POST',
                body: JSON.stringify({
                    title: postTitle,
                    body: postBody,
                    userId: 2
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            const newPost = await response.json();
            console.log(newPost, '***')
            setPosts(state => [newPost, ...state])
            setError('')
            setPostTitle('')
            setPostBody('')
        } catch (e) {
            console.error(e)
            setError('Something went wrong')
        }
        setIsPosting(false)
    }

    const handleRefresh = async () => {
        setRefreshing(true)
        await getPosts(20);
        setRefreshing(false)
    }

    useEffect(() => {
        getPosts();
    }, []);

    if (loading) {
        return (
            <SafeAreaView style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
                backgroundColor: '#f5f5f5'
            }}>
                <ActivityIndicator size={'large'} color={'#00f'}/>
                <Text>Loading...</Text>
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder={'Post Title'}
                    value={postTitle}
                    onChangeText={setPostTitle}
                />
                <TextInput
                    style={styles.input}
                    placeholder={'Post Body'}
                    value={postBody}
                    onChangeText={setPostBody}
                />

                <Button
                    disabled={isPosting}
                    title={isPosting ? 'Posting...' : 'Post'}
                    onPress={handlePost}
                />
            </View>
            <View style={styles.listContainer}>
                <FlatList
                    data={posts} renderItem={({item}) => (
                    <View style={styles.listItem}>
                        <Text style={styles.listTitle}>{item.title}</Text>
                        <Text style={styles.listBody}>{item.body}</Text>
                    </View>
                )}
                    ListEmptyComponent={() => <Text>No Posts</Text>}
                    ListHeaderComponent={() => <Text
                        style={{fontSize: 24, fontWeight: 'bold', marginBottom: 16}}>Posts</Text>}
                    ListFooterComponent={() => <Text style={{fontSize: 24, fontWeight: 'bold', marginTop: 16}}>End of
                        the List</Text>}
                    keyExtractor={(item) => item.id.toString()}
                    ItemSeparatorComponent={() => <View style={{height: 16}}/>}
                    refreshing={refreshing}
                    onRefresh={handleRefresh}
                />
            </View>
        </SafeAreaView>
    );
};

export default ApiRequests;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    listContainer: {
        flex: 1,
        paddingHorizontal: 16,
        marginVertical: 20,
    },
    listItem: {
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
    },
    listTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    listBody: {
        fontSize: 16,
        marginTop: 8,
    },
    inputContainer: {
        paddingHorizontal: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 8,
        marginVertical: 8,
    }
})