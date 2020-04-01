The regular README genereated by react is shown in README_REACT.md

### App Structure

## containers folder 
used for statefull components
## components folder 
 used for stateless / dumb containers
## assets folder
 used for logo and more
## hoc folder
 High Order Components - Components that wrap other components and add some functionality. (e.g Aux component)
 There are two ways of doing that:
 1) <someHocComponent> <ContentComponent/> </someHocComponent>
 2) export default someHocComponent(ContentComponent)
 
 When using the second approach the convention is to name the hoc file like this: With<HOC>Handler (e.g withErrorHandler)

 ### Notes
 ## CSS Modules
 I am using CSS Modules in this project, therefore i am namig the css file with .module extension (e.g Layout.module.css).
 The motiviation for using this pattern is to avoid css namig clash. More details [here](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/) 

 ### Packages
 ## prop-types
    npm -i prop-types
        Validates the prop type

### Style
## ClassBased Components
    *   class Example extends React..
    *   this.props
## Functional Components
    *   class example = (props) => {}...


### CSS
## font-size based on rem 
    1 rem is the default user's font, so 1.2 will be litle bit bigger
## @media
    used for style the app for differemt devices such mobile

### React Basics
## Initialize state
    there some variants for doing this.
    #
    class Example extends Component {
        constructor(props) {
            super(props);
            this.state = {...}
        }
    }
    #
    class Example extends Component {
        state = {
            
        }
    }
    #
    The Functional way (TBC)
##  Improve Performance
    # Sometimes i am using the shouldComponentUpdate to check if some props were changed, this check saves perforemance due to avoiding of updating the virtual dom.
    # Alternativly we can extend PureComponent which handles the shouldComponentUpdate method for us.
## Component Lifecycle Methods
    For best performance we use hooks/lifecycle (free up resources and control rendering and optimization)
    There are two ways for implementing react hooks - Class based approach and functional based approach (React hooks)
    The Class Based [Approach](https://reactjs.org/docs/state-and-lifecycle.html) main methods are:
    - The componentDidMount() method runs after the component output has been rendered to the DOM
    It is best place for doing things that cause side effects such as http requests.
    - There is as well method componentDidUpdate() which is a good place for http requests, this method is used in case that the component is already exists.

## Key property
    When React renders an array, React expects to get a key property for each element, for optimazion and controlling.
    example:  const posts = this.state.posts.map(post => <Post key={postData.id} postData={post}/>);

#   Lazy Loading - TBC

#   Routing - used by react-router-dom
