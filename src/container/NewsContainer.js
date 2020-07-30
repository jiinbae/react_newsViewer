import React from 'react';
import { connect, useSelector } from 'react-redux';
import NewsList from '../components/NewsList';
import { usNews, krNews, cnNews, jpNews } from '../modules/NewsReduxRefac';
import { getPost, getUsers } from '../modules/sample';

// const { useEffect } = React;

// const NewsContainer = ({getPost, post, loadingPost}) => {
//     useEffect(() => {
//         const fn = async () => {
//           try {
//             await getPost(1);
//           } catch (e) {
//             console.log(e); // 에러 조회
//           }
//         };
//         fn();
//       }, [getPost]);
//       return (
//           <NewsList
//           post={post}
//           loadingPost={loadingPost}
//           />
//       )
// }

const NewsContainer = ({ country /* usNews, krNews, cnNews, jpNews */ }) => {
    const country = useSelector(state => state.newsReduxRefac.country);
    // const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
    return (
    <NewsList
        country={country}
        /* onIncrease={() => dispatch(increase())} */ />
    );
};

export default NewsContainer;

// 리덕스와 연동하려면 connect 함수 사용해야 함.
// const makeContainer = connect(mapStateToProps, mapDispatchToProps)
// makeContainer(타깃 컴포넌트)

// 1)
// const CounterContainer = ({ number, increase, decrease }) => {
//     return (
//       <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//     );
//   };
  
//   const mapStateToProps = state => ({
//     number: state.counter.number,
//   });
//   const mapDispatchToProps = dispatch => ({
//     // 임시 함수
//     increase: () => {
//       console.log('increase');
//     },
//     decrease: () => {
//       console.log('decrease');
//     },
//   });
//   export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
//   )(CounterContainer);

// 2)
// import React from 'react';
// import { connect } from 'react-redux';
// import Counter from '../components/Counter';
// import { increase, decrease } from '../modules/counter';

// const CounterContainer = ({ number, increase, decrease }) => {
//   return (
//     <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//   );
// };

// const mapStateToProps = state => ({
//   number: state.counter.number,
// });
// const mapDispatchToProps = dispatch => ({
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(CounterContainer);

// export 부분 이렇게 쓸 수도 O.
// export default connect(
//     state => ({
//       number: state.counter.number,
//     }),
//     dispatch => ({
//       increase: () => dispatch(increase()),
//       decrease: () => dispatch(decrease()),
//     }),
//   )(CounterContainer);

// 4)
// import { bindActionCreators } from 'redux';

// export default connect(
//     state => ({
//       number: state.counter.number,
//     }),
//     dispatch =>
//       bindActionCreators(
//         {
//           increase,
//           decrease,
//         },
//         dispatch,
//       ),
//   )(CounterContainer);

// 5)
// export default connect(
//     state => ({
//       number: state.counter.number,
//     }),
//     {
//       increase,
//       decrease,
//     },
//   )(CounterContainer);