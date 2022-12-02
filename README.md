[![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

# Simple-component-library of React components created using `create-react-app`

MrballerpopUp is a modal library popup to confirm a form, configurable & accessible to display modals for your application.

#### Example

![The popUp Modal](./src/screen-popup.png "modal")

## Installation Run the following command:

```
npm i mrballerpopup
```

You'll need to use this on a React project for a form validation after installing import into form page.

#### Usage & Configuration

```javascript
import PopUp from "mrballerpopup";

// open Modal
const [isOpen, setIsOpen] = useState(false);
<section>
  <form>// Your form validation goes here</form>

  <button className="btn" onClick={onSave}>
    Save
  </button>
  {isOpen ? <PopUp setIsOpen={setIsOpen} /> : ""}
</section>;
```

## Authors

- [@Brandon JR](https://github.com/Mrballer59)
