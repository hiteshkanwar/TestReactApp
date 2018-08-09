'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var template = _react2.default.createElement(
  'h1',
  null,
  'hi how are you'
);

_reactDom2.default.render(template, document.getElementById('app'));

// class Post extends React.Component{

//   constructor(props){
//     super(props);
//     this.handleSubmit =  this.handleSubmit.bind(this);
//     this.handleEdit = this.handleEdit.bind(this);
//     this.removePost = this.removePost.bind(this);

//     this.state = {
//       posts: [],
//       count: 0,
//       visible: false
//     };
//   }

//   handleSubmit(e)  {
//      e.preventDefault();
//      const title = e.target.elements.title.value
//      const description = e.target.elements.description.value
//      const post = {}
//      post['title'] = title
//      post['description'] = description
//      this.setState({
//        posts: this.state.posts.concat([post]),
//        count: this.state.count + 1
//      });
//   }

//   handleEdit(e){
//      e.preventDefault();
//      const title = e.target.elements.title.value
//      const description = e.target.elements.description.value
//      const index =  e.target.elements.index.value
//      const post = {}
//      post['title'] = title
//      post['description'] = description
//      this.state.posts[index] = post
//      this.setState({
//        posts: this.state.posts,
//        visible: false
//      });

//   }

//   removePost(postToRemove){
//     this.setState((prevState) => ({
//       posts: prevState.posts.filter((post) => postToRemove !== post)
//     }));
//   }

//   render(){

//     return(
//       <div>
//         <Header/>
//         {this.state.count}

//         <AddPost 
//         handleSubmit = {this.handleSubmit}

//         />
//         {
//           this.state.posts.length}
//           {
//             this.state.posts.map((post,index) => 
//             {

//              return(
//                 <PostDetail key={index} post={post} removePost={this.removePost} handleEdit={this.handleEdit} index={index} visible={this.state.visible}/>
//              );
//             })
//         }
//       </div>
//     );
//   }

// }


// const Header = (props) =>{

//    return(
//        <div className ='header'>
//         <div className='container'>
//          <h1 className ='header__title'>{props.title}</h1>
//          { props.subTitle && <h2>{props.subTitle}</h2>}
//          </div>
//        </div>
//       );

// }

// Header.defaultProps = {
//   title : 'Post App',
//   subTitle: 'Posts List'
// }

// class PostDetail  extends React.Component {

//   constructor(props){
//     super(props);
//     this.handleVisible = this.handleVisible.bind(this);
//     console.log(1)
//     this.state = {
//       visible : this.props.visible  
//     };
//   }

//   handleVisible(e){
//    this.setState({ 
//      visible: !this.state.visible 
//     });
//    }

//    componentWillReceiveProps(nextProps){
//      this.setState({
//        visible: false
//      });
//    }


//  render(){
//    return(
//      <div> 
//       { !this.state.visible ? 
//          <div>
//            {this.props.post.title}  {this.props.post.description}
//             <button onClick={this.handleVisible}>Edit</button>
//             <button  onClick = {(e) => {
//          {this.props.removePost(this.props.post
//           )}
//          }}>Remove</button>
//          </div>

//          : null
//        }

//         { this.state.visible
//             ? <div id={this.props.post.title}>
//             <PostForm  
//               post= {this.props.post} 
//               handleEdit= {this.props.handleEdit} index={this.props.index} />
//             </div>
//             : null
//         }

//      </div>
//     );
//   }
// }


// const AddPost = (props) =>{
//      return(
//        <PostForm  handleSubmit= {props.handleSubmit}/>
//       );
// }


// class PostForm  extends React.Component {

//   constructor(props){
//     super(props)
//     this.state = {
//       title : props.post ? props.post.title : '',
//       description: props.post ? props.post.description : ''
//     }
//   }


//   render(){
//     const submitFunction = this.props.handleSubmit ? this.props.handleSubmit : this.props.handleEdit
//     const buttonText = this.props.handleSubmit ? 'Add Post' : 'Update Post'

//      return(
//        <form className='add-option' onSubmit={submitFunction}>
//            <input type="text" name="title" defaultValue={this.state.title} className='add-option-input'/>
//            <input type="text" name="description" defaultValue={this.state.description} className='add-option-input'/>
//            <input type="hidden" name="index" value={this.props.index} />

//            <button className='button'>{buttonText}</button> 
//          </form>
//       );
//     }

//  }


// ReactDOM.render(<Post/>, document.getElementById('app'));
