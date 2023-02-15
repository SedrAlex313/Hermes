import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../Utils/fireBase/fireBase.utils";
const SignIn = () =>{
    const LogInWithGoogle = async () => {
         const { user }  = await signInWithGooglePopup();
         const userDocReference = await createUserDocumentFromAuth(user);
    };
    
    return (
        <div>
            <h1>I am Sign-in page</h1>
            <button onClick={LogInWithGoogle}>
                Sign in with google popup
            </button>
        </div>
    );
};
export default SignIn;