import React from 'react';
import { connect } from 'react-redux';
import Sample from '../components/Sample';
import { getPost } from '../modules/sample';
import loading from '../modules/loading';

const { useEffect } = React; // ??????

useEffect(() => {
    const fn = async () => {
        try {
            await getPost(1);
        } catch (e) {
            console.log(e);
        }
    };
    fn();
}, [getPost]);

const SampleContainer = ({
    getPost,
    post,
    loadingPost
}) => {
    useEffect(() => {
        getPost(1);
    }, [getPost]);
    return (
        <Sample
            post={post}
            loadingPost={loadingPost}
        />
    );
};

export default connect(
    ({ sample, loading }) => ({
        post: sample.post,
        // loadingPost: sample.loading.GET_POST
        loadingPost: loading.GET_POST
    }),
    {
        getPost
    }
)(SampleContainer);