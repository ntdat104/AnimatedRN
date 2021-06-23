# Animation in React Native

---

## 1. Basic Animation

##### 1.1 Import modules

```tsx
import React from "react";
import { Animated, Easing, SafeAreaView, Button, Dimensions } from "react-native";
```

##### 1.2 Create App Component

```tsx
const App: React.FC = (): JSX.Element => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "space-evenly" }}>
      <Animation />
    </SafeAreaView>
  );
};
export default App;
```
