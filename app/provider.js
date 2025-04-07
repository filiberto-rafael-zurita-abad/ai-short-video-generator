"use client"
import { db } from '@/configs/db';
import { Users } from '@/configs/schema';
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm';
import React, { useEffect } from 'react'

// Define the Provider component, which takes children as a prop
function Provider({children}) {

  // Use the useUser hook to get the current user
  const {user}=useUser();

  // Use the useEffect hook to call the isNewUser function when the user changes
  useEffect(()=>{
    // Check if the user exists and then call the isNewUser function
    user&&isNewUser();
  }, [user]); // The effect depends on the user object


  
  // Define the isNewUser function, which checks if the current user is new and adds them to the database if they are
  const isNewUser=async()=>{
    // Query the database to find a user with the current user's email address
    const result=await db.select().from(Users)
    // Use the eq function to create an equality condition for the email address
    .where(eq(Users.email,user?.primaryEmailAddress?.emailAddress));

    // If no user is found with the current user's email address
    if(!result[0])
    {
      // Insert a new user into the database
      await db.insert(Users).values({
        // Set the name to the user's full name
        name:user.fullName,
        // Set the email to the user's primary email address
        email:user?.primaryEmailAddress?.emailAddress,
        // Set the image URL to the user's image URL
        imageUel:user?.imageUrl
      })
    }

  }

  // Render the children of the Provider component
  return (
    <div>
      {children}
    </div>
  )
}

// Export the Provider component
export default Provider
