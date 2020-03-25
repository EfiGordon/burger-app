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
