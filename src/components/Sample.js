import React from 'react';

const Sample = ({ loadingPost, post }) => {
    return (
        <div>
            <section>
                <h1>포스트</h1>
                {loadingPost && '로딩 중...'}
                {!loadingPost && post && ( //post &&를 사용하면 post 객체가 유효할 때만 그 내부의 post.title 혹은 post.body 값을 보여 줌.
                    <div>
                        <h3>{post.title}</h3>
                        <h3>{post.body}</h3>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Sample;

/* NewsItem꺼? */