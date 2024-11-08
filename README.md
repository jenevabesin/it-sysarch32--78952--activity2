fragment_donation_campaign_selection_page_item

<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@+id/activityItemRelativeLayout"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:layout_marginLeft="10dp"
    android:layout_marginRight="10dp">

    <TextView
        android:id="@+id/campaignTitleTextView"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginTop="20dp"
        android:text="@string/campaign_title"
        android:fontFamily="@font/poppins_bold"
        android:textAlignment="center"
        android:textColor="@color/black"
        android:textSize="@dimen/text_size_regular"
        android:textStyle="bold"/>

    <RelativeLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_below="@+id/campaignTitleTextView">

        <com.ucb.helpinghands.customviews.RoundedImageButton
            android:id="@+id/activityImageView"
            android:layout_width="149dp"
            android:layout_height="109dp"
            android:layout_marginLeft="20dp"
            android:layout_marginTop="25dp"
            android:layout_marginBottom="30dp"
            android:background="@android:color/transparent"
            android:clickable="false"
            android:src="@drawable/default_image"
            android:scaleType="centerCrop"/>

        <Button
            android:id="@+id/viewDetailsButton"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_centerVertical="true"
            android:layout_marginLeft="40dp"
            android:layout_toRightOf="@id/activityImageView"
            android:clickable="true"
            android:text="@string/view_details"
            android:fontFamily="@font/poppins_semibold"
            android:textColor="#F8CF40"
            android:textSize="14sp"
            android:background="@android:color/transparent"/>
    </RelativeLayout>
</RelativeLayout>



fragment_donation_campaign_selection_page
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    tools:context=".fragments.DonationCampaignSelectionPageFragment">


    <TextView
        android:id="@+id/text1"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="@string/donate_for_a_campaign_t"
        android:textColor="@color/color_light_blue"
        android:textSize="@dimen/text_size_20sp"
        android:fontFamily="@font/poppins_italic"
        android:textAlignment="center"
        android:layout_marginTop="20dp">
    </TextView>

    <ListView
        android:id="@+id/list"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_below="@+id/text1"
        android:layout_marginTop="10dp"
        android:layout_marginBottom="10dp"
        android:divider="@color/black"
        android:dividerHeight="2dp"
        android:paddingStart="10dp"
        android:paddingEnd="10dp"
        android:clipToPadding="false"
        tools:listitem="@layout/volunteer_campaign_selection_page_item"/>

</RelativeLayout>


fragment_create_donation_campaign_status_page
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".fragments.CreateDonationCampaignStatusPageFragment">

    <TextView
        android:id="@+id/subtitle"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginStart="@dimen/margin_start_large"
        android:layout_marginTop="@dimen/margin_top_large"
        android:text="@string/donation_campaign"
        android:textColor="@color/color_light_blue"
        android:textSize="@dimen/text_size_20sp"
        android:textStyle="italic"
        android:layout_alignParentStart="true"
        android:layout_alignParentTop="true" />

    <ImageView
        android:id="@+id/campaignImage"
        android:layout_width="150dp"
        android:layout_height="110dp"
        android:layout_below="@id/subtitle"
        android:layout_centerHorizontal="true"
        android:background="@android:color/transparent"
        android:src="@drawable/campain_image"
        android:contentDescription="@string/campaign_image_desc"
        android:padding="@dimen/padding_small"
        android:scaleType="centerCrop" />

    <TextView
        android:id="@+id/Title"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginStart="200dp"
        android:layout_below="@id/campaignImage"
        android:layout_marginTop="@dimen/margin_medium"
        android:text="@string/title_donation"
        android:textColor="@color/black"
        android:textSize="@dimen/text_size_medium"
        android:textStyle="bold"
        android:layout_alignParentStart="true" />

    <TextView
        android:id="@+id/campaignDescription"
        android:layout_width="@dimen/layout_width_medium"
        android:layout_height="90dp"
        android:layout_marginStart="@dimen/margin_medium"
        android:layout_below="@id/Title"
        android:layout_marginTop="@dimen/margin_medium"
        android:gravity="top|start"
        android:minHeight="80dp"
        android:text="@string/description"
        android:textColor="@color/black"
        android:textSize="@dimen/text_size_large"
        android:layout_alignParentStart="true" />

    <TextView
        android:id="@+id/amountDonated"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginStart="@dimen/margin_medium"
        android:layout_below="@id/campaignDescription"
        android:padding="@dimen/padding_small"
        android:layout_marginTop="@dimen/margin_medium"
        android:text="@string/amount_donated"
        android:textColor="@color/black"
        android:textStyle="bold"
        android:textSize="@dimen/text_size_small"
        android:layout_alignParentStart="true" />

    <TextView
        android:id="@+id/amountDonate"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_below="@id/campaignDescription"
        android:layout_marginTop="@dimen/margin_medium"
        android:background="@color/color_background_light_gray"
        android:textColor="@color/black"
        android:padding="@dimen/padding_small"
        android:text="@string/amount"
        android:textSize="@dimen/text_size_small"
        android:layout_toEndOf="@id/amountDonated"/>

    <TextView
        android:id="@+id/peopleDonated"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginStart="@dimen/margin_medium"
        android:layout_below="@id/amountDonate"
        android:layout_marginTop="@dimen/margin_medium"
        android:text="@string/people_who_donated"
        android:textColor="@color/black"
        android:textStyle="bold"
        android:textSize="@dimen/text_size_small"
        android:layout_alignParentStart="true" />

    <TextView
        android:id="@+id/donorsList"
        android:layout_width="@dimen/layout_width_medium"
        android:layout_height="119dp"
        android:layout_marginStart="@dimen/margin_medium"
        android:layout_below="@id/peopleDonated"
        android:layout_marginTop="@dimen/margin_small"
        android:gravity="top|start"
        android:minHeight="80dp"
        android:text="@string/peopleDonated"
        android:textColor="@color/black"
        android:textSize="@dimen/text_size_small"
        android:layout_alignParentStart="true" />

    <TextView
        android:id="@+id/numPeopleDonated"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginStart="@dimen/margin_medium"
        android:layout_below="@id/donorsList"
        android:layout_marginTop="@dimen/margin_small"
        android:text="@string/number_of_people_donated"
        android:textColor="@color/black"
        android:textStyle="bold"
        android:textSize="@dimen/text_size_small"
        android:layout_alignParentStart="true" />

    <TextView
        android:id="@+id/donorsCount"
        android:layout_width="13dp"
        android:layout_height="15dp"
        android:layout_below="@id/donorsList"
        android:layout_marginTop="8dp"
        android:background="@color/color_background_light_gray"
        android:text="@string/num_people_donated"
        android:textColor="@color/black"
        android:textSize="@dimen/text_size_small"
        android:layout_toEndOf="@id/numPeopleDonated" />

    <Button
        android:id="@+id/donateButton"
        android:layout_width="80dp"
        android:layout_height="50dp"
        android:layout_below="@id/donorsList"
        android:layout_toEndOf="@id/donorsCount"
        android:layout_marginStart="105dp"
        android:backgroundTint="@color/color_background_tint_gold"
        android:text="@string/donate_button"
        android:textSize="@dimen/text_size_regular"
        android:textStyle="bold"
        android:textColor="@color/white"
        android:textAllCaps="false"
        android:fontFamily="@font/poppins_extrabold"
        android:padding="0dp"/>

</RelativeLayout>


donation adapter 
 public ViewHolder(View view) {
            super(view);
            titleTextView = view.findViewById(R.id.campaignTitleTextView);
            detailsButtonView = view.findViewById(R.id.viewDetailsButton);
            imageView = view.findViewById(R.id.activityImageView);
        }
