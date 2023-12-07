import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getProfile, updateProfile } from "./userSlice"
import { useForm } from "react-hook-form"

const UserInfo = () => {
  const [toggleEdditing, setToggleEdditing] = useState(false)
  const dispatch = useDispatch()

  const user = useSelector((state) => state.user.user)
  const profile = useSelector((state) => state.user.profile)

  const { register, handleSubmit } = useForm()

  useEffect(() => {
    dispatch(getProfile(user))
  }, [])

  const onSubmit = (data) => {
    const profile = {
      token: user,
      profile: data,
    }
    dispatch(updateProfile(profile))
    setToggleEdditing(false)
  }

  const handleToggleEdditing = () => {
    setToggleEdditing(!toggleEdditing)
  }

  return (
    <div class="header">
      <h1>
        Welcome back
        <br />
        {profile && !toggleEdditing && `${profile.firstName ?? ""}  ${profile.lastName ?? ""}`}
      </h1>

      {toggleEdditing ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="editting-input-container">
            <input
              {...register("firstName", {
                required: true,
                maxLength: 30,
                defaultValue: profile.firstName ?? null,
              })}
              placeholder={profile.firstName ?? "First Name"}
              type="text"
              className="editting-input"
            />
            <input
              {...register("lastName", {
                required: true,
                maxLength: 30,
                defaultValue: profile.lastName ?? null,
              })}
              placeholder={profile.lastName ?? "First Name"}
              type="text"
              className="editting-input"
            />
          </div>

          <div className="editting-button-container">
            <button type="submit" className="editting-button">
              Save
            </button>
            <button type="button" className="editting-button" onClick={handleToggleEdditing}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <button class="edit-button" onClick={handleToggleEdditing}>
          Edit Name
        </button>
      )}
    </div>
  )
}

export default UserInfo
